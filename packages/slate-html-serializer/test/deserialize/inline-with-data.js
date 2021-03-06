/** @jsx h */

import h from '../helpers/h'

export const config = {
  rules: [
    {
      deserialize(el, next) {
        switch (el.tagName.toLowerCase()) {
          case 'p': {
            return {
              object: 'block',
              type: 'paragraph',
              nodes: next(el.childNodes),
            }
          }
          case 'a': {
            return {
              object: 'inline',
              type: 'link',
              data: { thing: 'value' },
              nodes: next(el.childNodes),
            }
          }
        }
      },
    },
  ],
}

export const input = `
<p><a>one</a></p>
`.trim()

export const output = (
  <value>
    <document>
      <paragraph>
        <link thing="value">one</link>
      </paragraph>
    </document>
  </value>
)
