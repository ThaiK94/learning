import { Counter } from "./components/Counter";

export function HomePage(){
    return (
        <div>
            <h1>Hello!</h1>
            <h2>Start editing to see some magic happen!</h2>

            <div>
                <Counter />
            </div>
        </div>
    )
}