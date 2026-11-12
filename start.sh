#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"
: "${OPENCODE_WEB_DIR:?OPENCODE_WEB_DIR must point to worker metadata storage}"
PORT="${PORT:-3000}"
export PORT

/usr/bin/time -p mkdir -p "$OPENCODE_WEB_DIR"
/usr/bin/time -p npm ci --no-audit --no-fund
/usr/bin/time -p npm run build
/usr/bin/time -p node --input-type=module -e '
  import { mkdirSync, writeFileSync } from "node:fs";
  import { resolve, join } from "node:path";
  const project = resolve(process.cwd());
  const metadataDir = process.env.OPENCODE_WEB_DIR;
  mkdirSync(metadataDir, { recursive: true });
  writeFileSync(join(metadataDir, "deployment-output.json"), JSON.stringify({ project, directory: join(project, "dist") }));
'

# Keep the preview server in the foreground for the controller-owned tmux session.
/usr/bin/time -p npm run preview -- --host 0.0.0.0 --port "$PORT" --strictPort
