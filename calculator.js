const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

const OPERATOR_PRECEDENCE = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '%': 2,
};

function tokenizeExpression(expression) {
    const tokens = [];
    let numberBuffer = '';

    for (let i = 0; i < expression.length; i += 1) {
        const char = expression[i];

        if (char === ' ') {
            continue;
        }

        if ((char >= '0' && char <= '9') || char === '.') {
            numberBuffer += char;
            continue;
        }

        if (numberBuffer) {
            if ((numberBuffer.match(/\./g) || []).length > 1) {
                throw new Error('Invalid number');
            }
            tokens.push(Number(numberBuffer));
            numberBuffer = '';
        }

        if (Object.prototype.hasOwnProperty.call(OPERATOR_PRECEDENCE, char)) {
            tokens.push(char);
            continue;
        }

        throw new Error('Invalid character');
    }

    if (numberBuffer) {
        if ((numberBuffer.match(/\./g) || []).length > 1) {
            throw new Error('Invalid number');
        }
        tokens.push(Number(numberBuffer));
    }

    return tokens;
}

function normalizeUnaryMinus(tokens) {
    const normalized = [];

    for (let i = 0; i < tokens.length; i += 1) {
        const token = tokens[i];
        const prev = normalized[normalized.length - 1];
        const isUnaryMinus =
            token === '-' &&
            (normalized.length === 0 || typeof prev === 'string');

        if (isUnaryMinus) {
            const next = tokens[i + 1];

            if (typeof next !== 'number' || Number.isNaN(next)) {
                throw new Error('Invalid unary minus');
            }

            normalized.push(-next);
            i += 1;
            continue;
        }

        normalized.push(token);
    }

    return normalized;
}

function applyOperator(values, operator) {
    if (values.length < 2) {
        throw new Error('Invalid expression');
    }

    const right = values.pop();
    const left = values.pop();

    switch (operator) {
        case '+':
            values.push(left + right);
            break;
        case '-':
            values.push(left - right);
            break;
        case '*':
            values.push(left * right);
            break;
        case '/':
            values.push(left / right);
            break;
        case '%':
            values.push(left % right);
            break;
        default:
            throw new Error('Invalid operator');
    }
}

function evaluateExpression(expression) {
    if (!expression) {
        return '';
    }

    const tokens = normalizeUnaryMinus(tokenizeExpression(expression));

    if (tokens.length === 0) {
        return '';
    }

    const values = [];
    const operators = [];

    for (const token of tokens) {
        if (typeof token === 'number') {
            if (Number.isNaN(token)) {
                throw new Error('Invalid number');
            }
            values.push(token);
            continue;
        }

        while (
            operators.length > 0 &&
            OPERATOR_PRECEDENCE[operators[operators.length - 1]] >=
            OPERATOR_PRECEDENCE[token]
        ) {
            applyOperator(values, operators.pop());
        }

        operators.push(token);
    }

    while (operators.length > 0) {
        applyOperator(values, operators.pop());
    }

    if (values.length !== 1) {
        throw new Error('Invalid expression');
    }

    const result = values[0];

    if (!Number.isFinite(result)) {
        throw new Error('Invalid result');
    }

    return String(result);
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                display.value = evaluateExpression(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'C') {
            display.value = '';
        } else {
            display.value += value;
        }
    });
});
