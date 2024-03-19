import { ChangeEvent, ChangeEventHandler } from "react";



// interface ISeatchBox extends IChangeHadlerProps{
//     className: string;
//     placeholder? :string;
// }
// interface IChangeHadlerProps{
//     onChangeHandler:(a:string)=>void
// }

type SearchBoxProps = {
    className: string;
    placeholder? :string;
    // onChangeHandler:ChangeEventHandler<HTMLInputElement>;
    onChangeHandler:(event: ChangeEvent<HTMLInputElement>)=> void;
}
const SearchBox =({className,placeholder,onChangeHandler}:
    // ISeatchBox
    SearchBoxProps
    )=> (
            <input className={className} type='search' placeholder={placeholder} onChange={onChangeHandler} />
        )
export default SearchBox;
