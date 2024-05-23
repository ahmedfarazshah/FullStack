import Cars from './data'

function App() {


const [honda, tesla ] = Cars

const {model, colors, speedStats:{topSpeed, zerotoSixty}} = honda
const {model: modelx, colors: colorsx, speedStats:{topSpeed: topSpeedx, zerotoSixty: zerotoSixtyx}} = tesla
const [black , silver] = colors
const [blackx , silverx] = colorsx



  return (
    <>
      <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Top Color</th>
              <th>Top Speed</th>
              <th>0 To 60</th>
            </tr>
          </thead>
        <tbody>
        <tr>
              <td>{model}</td>
              <td>{black}</td>
              <td>{topSpeed}</td>
              <td>{zerotoSixty}</td>
            </tr>
            <tr>
              <td>{modelx}</td>
              <td>{blackx}</td>
              <td>{topSpeedx}</td>
              <td>{zerotoSixtyx}</td>
            </tr>
        </tbody>
      </table>


    </>
  )
}

export default App
