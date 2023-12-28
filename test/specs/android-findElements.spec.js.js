const { isExportDeclaration } = require("typescript");

// create sample test
describe('Android Elements Test', () => {
  it('Find by accessibility id', async () => {
    // Find element by ID and click
    const e = await $('~App');
    await e.click();

    // Assert on new view
    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeExisting();
  })

  it('Find by class name', async () => {
    // Find element by class
    // Reminder '$' returns first element
    const e = await $('android.widget.TextView');


    // Assert on new view
    await expect(e).toHaveText('API Demos');
  })

  it('Find by xpath', async () => {
    // xpath - (//tagname[@attribute=value])
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    // find by resourceId
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

    // find by text
    await $('//android.widget.TextView[@text="Command two"]').click();

    // find by class - assertion
    const textAssertion = await $('//android.widget.TextView');
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  })

  it('Find by UIAutomator', async () => {
    // https://webdriver.io/docs/selectors/#android-uiautomator
    // find by text contains
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it('Working with text field', async () => {
    // access the auto complete screen
    await $('~Views').click();
    await $('//*[@text="Auto Complete"]').click();
    await $('//*[@content-desc="1. Screen Top"]').click();

    // enter the country name
    const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    await textField.addValue('Canada');

    // verify the country name
    await expect(textField).toHaveText('Canada');
  });
})