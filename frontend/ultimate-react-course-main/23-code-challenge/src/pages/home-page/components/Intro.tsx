import type { User } from "../../../types/user";

export function Intro({spongeBob} : {spongeBob: User}){
    return (
        <>
            <h1>{spongeBob.name}</h1>
            <p>
                {spongeBob.description}
            </p>
        </>
    );
}