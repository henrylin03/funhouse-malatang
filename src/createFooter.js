export function createFooter() {
  const COPYRIGHT_TEXT = "© 2024 LYW Catering Pty Ltd";

  const section = document.createElement("footer");
  const text = document.createElement("small");
  text.textContent = COPYRIGHT_TEXT;

  section.appendChild(text);

  return section;
}
