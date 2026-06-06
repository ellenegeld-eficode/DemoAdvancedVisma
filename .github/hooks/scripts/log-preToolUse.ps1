param(
    [Parameter(ValueFromPipeline = $true)]
    [string]$Line
)

begin {
    $chunks = @()
}

process {
    if ($null -ne $Line) {
        $chunks += $Line
    }
}

end {
    $raw = ($chunks -join [Environment]::NewLine).Trim()

    if ([string]::IsNullOrWhiteSpace($raw)) {
        $toolEvent = '<no hook payload received>'
    }
    else {
        $candidate = $raw.TrimStart([char]0xFEFF)
        $first = $candidate.IndexOf('{')
        $last = $candidate.LastIndexOf('}')

        if ($first -ge 0 -and $last -gt $first) {
            $candidate = $candidate.Substring($first, $last - $first + 1)
        }

        try {
            $toolEvent = ($candidate | node -e "const fs=require('fs');const s=fs.readFileSync(0,'utf8').trim();process.stdout.write(JSON.stringify(JSON.parse(s), null, 2));" | Out-String).TrimEnd()
            if ([string]::IsNullOrWhiteSpace($toolEvent)) {
                $toolEvent = $raw
            }
        }
        catch {
            $toolEvent = $raw
        }
    }

    $timestamp = Get-Date -Format o
    $entry = "Pre-tool use [$timestamp]:`n$toolEvent`n---`n"
    Add-Content -Path logs/preToolUse.log -Value $entry
}
