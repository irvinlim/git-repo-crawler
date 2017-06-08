# git-repo-crawler

A simple tool to crawl all Git repositories on disk, starting from a given directory. 

 [![Version](https://img.shields.io/npm/v/git-repo-crawler.svg)](https://www.npmjs.com/package/git-repo-crawler) [![Downloads](https://img.shields.io/npm/dt/git-repo-crawler.svg)](https://www.npmjs.com/package/git-repo-crawler)

## Installation

```
npm i -g git-repo-crawler
```

## Usage

### `--directoryRoot`, `-d`

Specifies a root directory to start from.

*Default: Current working directory.*

### `--command`, `-c`

Allows you to run a command in each directory. The `stdout` and `stderr` output will be piped to the console.

If no command is specified, then the tool will simply print out the list of Git directories found.

## License

MIT