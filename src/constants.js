'use strict';

module.exports = {
  DEFAULT_COMMAND: `--help`,
  USER_ARGV_INDEX: 2,
  ExitCode: {
    SUCCESS: 0,
    FAIL: 1
  },
  DEFAULT_OFFER_NUMBER: 1,
  MockFile: {
    OFFERS: `offers.json`,
    CATEGORIES: `categories.json`
  },
  MAX_MOCK_OBJECT_NUMBER: 1000,
  HttpCode: {
    OK: 200,
    SUCCESS_POST: 201,
    SUCCESS_DELETE: 204,
    WRONG_QUERY: 400,
    BAD_AUTH: 401,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500
  },
  ErrorCode: {
    NO_FILE_OR_DIRECTORY: `ENOENT`
  },
  FilePath: {
    SENTENCES: `./data/sentences.txt`,
    TITLES: `./data/titles.txt`,
    CATEGORIES: `./data/categories.txt`,
    COMMENTS_TEXT: `./data/comments_text.txt`
  },
  BASE_API_URL: `http://localhost:3000`,
  ContentTypeRegExp: {
    HTML: /text\/html/,
    JSON: /application\/json/
  }
};
