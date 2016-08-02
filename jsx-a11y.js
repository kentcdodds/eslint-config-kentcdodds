module.exports = {
  "env": {
    "browser": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/aria-proptypes": 2,
    "jsx-a11y/aria-role": 2,
    "jsx-a11y/aria-unsupported-elements": 2,
    "jsx-a11y/heading-has-content": 2,
    "jsx-a11y/href-no-hash": 2,
    "jsx-a11y/html-has-lang": 2,
    "jsx-a11y/img-has-alt": 2,
    "jsx-a11y/img-redundant-alt": 2,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/lang": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/no-access-key": 2,
    "jsx-a11y/no-marquee": 2,
    "jsx-a11y/no-onchange": 0,
    "jsx-a11y/onclick-has-focus": 2,
    "jsx-a11y/onclick-has-role": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "jsx-a11y/scope": 2,
    "jsx-a11y/tabindex-no-positive": 1,
  },
}
