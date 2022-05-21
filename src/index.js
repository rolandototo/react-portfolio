import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {I18nextProvider} from "react-i18next"
import i18next from "i18next"

i18next.init({
    interpolation: { escapeValue: false },
})

ReactDOM.render(

<I18nextProvider i18={i18next}>
<App/>
</I18nextProvider>

,
 document.querySelector("#root")
 )