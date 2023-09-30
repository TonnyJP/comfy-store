import {useNavigation} from "react-router-dom"

export const SubmitBtn = ({type, text, styleClass}) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting"
    return(
        <button type={type} className={`${styleClass? styleClass : "btn btn-primary btn-block"}`} disabled={isSubmitting}>
            {isSubmitting? <>
            <span className="loading loading-spinner" />
            sending...
            </>
            :
            text || 'submit'
            }
        </button>
    )
}