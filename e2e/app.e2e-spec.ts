import { ProjectPapaPage } from './app.po';

describe('project-papa App', () => {
  let page: ProjectPapaPage;

  beforeEach(() => {
    page = new ProjectPapaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
