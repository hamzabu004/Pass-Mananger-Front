export default function WrapDiv (props) {
    return(
    <div className={'flex flex-row w-full bg-main-back font-roboto p-2 ' + props.className}>
        {props.children}
    </div>
    )
}