import React, { PropTypes } from 'react'

let divStyle = {
  backgroundColor: 'mintcream'
}

const Hello = ({ moji, clickTriangle, clickSquare, clickCircle, clickCross }) => (
  <div style={ divStyle }>
    <h1>Hello, {moji} world.</h1>
    <table>
      <tbody>
        <tr>
          <td></td>
          <td>
            <button onClick={ clickTriangle }>△</button>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <button onClick={ clickSquare }>□</button>
          </td>
          <td></td>
          <td>
            <button onClick={ clickCircle }>○</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button onClick={ clickCross }>×</button>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
)

Hello.propTypes = {
  moji: PropTypes.string,
  clickTriangle: PropTypes.func.isRequired,
  clickSquare: PropTypes.func.isRequired,
  clickCircle: PropTypes.func.isRequired,
  clickCross: PropTypes.func.isRequired
}

export default Hello
