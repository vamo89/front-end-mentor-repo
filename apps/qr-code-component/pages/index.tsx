const Home = () => (
  <>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />{" "}
    {/* displays site properly based on user's device */}
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./images/favicon-32x32.png"
    />
    <title>Frontend Mentor | QR code component</title>
    {/* Feel free to remove these styles or customise in your own stylesheet 👍 */}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .attribution { font-size: 11px; text-align: center; }\n    .attribution a { color: hsl(228, 45%, 44%); }\n  ",
      }}
    />
    Improve your front-end skills by building projects Scan the QR code to visit
    Frontend Mentor and take your coding skills to the next level
    <div className="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Your Name Here</a>.
    </div>
  </>
);

export default Home;
