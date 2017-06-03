import { MyAplikasiPage } from './app.po';

describe('my-aplikasi App', () => {
  let page: MyAplikasiPage;

  beforeEach(() => {
    page = new MyAplikasiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
