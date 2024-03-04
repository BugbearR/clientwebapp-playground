import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Vite \+ TS/);
});

test("test click", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("id=counter")).toHaveText("count is 0");
    page.locator("id=counter").click();
    await expect(page.locator("id=counter")).toHaveText("count is 1");
});
