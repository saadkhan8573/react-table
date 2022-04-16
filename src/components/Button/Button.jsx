import { ButtonStyle } from "./style"
export const Button = ({
    text,
    type,
    disabled
}) => {
    return ( <ButtonStyle type={type} disabled={disabled || false}> {
            text
        } </ButtonStyle>
    )
}