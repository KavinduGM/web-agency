// Generates a unique, human-readable case ID for tickets and quote requests.
// Format:  WX-{YYMMDD}-{6-char alphanumeric}
// Example: WX-260521-A8K3F2

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // skips O/0/I/1 to avoid confusion

export function generateCaseId(prefix = "WX") {
  const now = new Date();
  const yy = String(now.getUTCFullYear()).slice(-2);
  const mm = String(now.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(now.getUTCDate()).padStart(2, "0");
  let rand = "";
  for (let i = 0; i < 6; i++) {
    rand += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return `${prefix}-${yy}${mm}${dd}-${rand}`;
}
