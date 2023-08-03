import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import PassGenerator from "../pages/PassGenerate.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PassGenerator">
                <PassGenerator/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews