import HeaderTopbar from "@/components/HeaderTopbar";

export default function Header(props) {

    return (
        <header id={'header'} className={props.topbarNone}>
            <HeaderTopbar />
        </header>
    )
}