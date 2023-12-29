import PropTypes from "prop-types";

export default function About({ mode }) {
  const accordionStyle = {
    backgroundColor: mode === "dark" ? "#1560bd" : "aliceblue",
    color: mode === "dark" ? "white" : "black",
  };

  return (
    <div className="container my-2">
      <h2
        className="my-3"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        About TextUtils
      </h2>
      <div className="accordion" id="accordionExample">
        {accordionItems.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" style={accordionStyle}>
              <button
                className={`accordion-button ${index === 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index + 1}`}
                aria-expanded={index === 0}
                aria-controls={`collapse${index + 1}`}
                style={accordionStyle}
              >
                <strong>{item.title}</strong>
              </button>
            </h2>
            <div
              id={`collapse${index + 1}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionStyle}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

About.propTypes = {
  mode: PropTypes.string.isRequired,
};

const accordionItems = [
  {
    title: "Analyze Your Text",
    content:
      "TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, word frequency, or anything else you need, we've got you covered.",
  },
  {
    title: "Free to Use",
    content:
      "TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. It reports the number of words and characters, making it suitable for writing text with word/character limits.",
  },
  {
    title: "Browser Compatible",
    content:
      "This word counter software works in any web browser, including Chrome, Firefox, Internet Explorer, Safari, and Opera. It can count characters in Facebook posts, blogs, books, Excel documents, PDF documents, essays, and more.",
  },
];
