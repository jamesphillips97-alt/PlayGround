#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"
: "${CAPTURE_URL:?CAPTURE_URL must be set to the exact preview URL}"
: "${CAPTURE_DIR:?CAPTURE_DIR must be set to the evidence directory}"
: "${RUNTIME_DIR:?RUNTIME_DIR must point to the worker runtime}"

mkdir -p "$CAPTURE_DIR"
# default-capture owns and closes its browser; it never terminates the app server.
/usr/bin/time -p node "$RUNTIME_DIR/scripts/default-capture.mjs"
