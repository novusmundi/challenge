// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:3000/";

test("probando img", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");

  const textContent = await text.textContent();

  await expect(textContent?.length).toBeGreaterThan(0);
});
