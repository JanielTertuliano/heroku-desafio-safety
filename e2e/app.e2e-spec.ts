import { DesafioPage } from './app.po';

describe('desafio App', () => {
  let page: DesafioPage;

  beforeEach(() => {
    page = new DesafioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
