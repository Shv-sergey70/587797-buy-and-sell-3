'use strict';

const {readContent} = require(`../../utils`);

// jest.mock(`../../utils`, () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       readContent: readContentMock
//     };
//   });
// });

const request = require(`supertest`);
const categoriesRouter = require(`./categories`);
const app = require(`express`)();
app.use(categoriesRouter);

const {
  HttpCode
} = require(`../../constants`);

describe(`test categories route`, () => {
  test(`test categories GET method success answer`, async () => {
    const res = await request(app).get(`/`);
    expect(res.statusCode).toBe(HttpCode.OK);
    expect(readContent).toHaveBeenCalledTimes(1);
  });
});