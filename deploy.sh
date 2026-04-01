#!/bin/bash
set -e

ACCOUNT_ID="f9a23c3c37fcfacd8b2cd5277a6fd1d2"
PROJECT_NAME="cadolabs-io"
BRANCH="${1:-stage}"
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
TMPDIR_DEPLOY=$(mktemp -d)

# Symlink functions so wrangler picks up the SSR worker
ln -s "$PROJECT_DIR/functions" "$TMPDIR_DEPLOY/functions"

cd "$TMPDIR_DEPLOY"
CLOUDFLARE_ACCOUNT_ID="$ACCOUNT_ID" npx --prefix "$PROJECT_DIR" \
  wrangler pages deploy "$PROJECT_DIR/build/client" \
  --project-name="$PROJECT_NAME" \
  --branch="$BRANCH" \
  --commit-dirty=true

rm -rf "$TMPDIR_DEPLOY"
