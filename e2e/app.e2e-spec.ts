import { Ng2HzDatepickerExamplePage } from './app.po';

describe('ng2-hz-datepicker-example App', function() {
  let page: Ng2HzDatepickerExamplePage;

  beforeEach(() => {
    page = new Ng2HzDatepickerExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
