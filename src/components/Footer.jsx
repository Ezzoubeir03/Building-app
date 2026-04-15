///footer should have the email and the user name and the pssword box.

const Footer = () => {
  return (
    <footer>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <label htmlFor="Message">Message:</label>
      <textarea id="message" rows="4" cols ="50"></textarea>
    </footer>
  );
};

export default Footer;