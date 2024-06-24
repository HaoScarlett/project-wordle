import React from "react";

function LostBanner({answer}) {
  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default LostBanner;
