export function hey(message) {

  message = message.trim();

  if (message.length === 0) {
    return 'Fine. Be that way!'
  }

  if (/[a-z\xfc\xe4]/.test(message) === false && /[A-Z\xc4]+/.test(message) === true) { // Expect only capitalized char
    return 'Whoa, chill out!';
  }

  if (/\w+\?$/.test(message)) { // Except question mark at the end
    return 'Sure.';
  }

  return 'Whatever.';
}
