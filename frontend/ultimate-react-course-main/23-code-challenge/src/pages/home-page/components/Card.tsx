import { Avatar } from "./Avatar";
import { Intro } from "./Intro";
import { SkillList } from "./SkillList";
import { SpongeBob } from "../../../data/SpongeBob";

export function Card(){
    return (
        <div className="card">
            <Avatar spongeBob= { SpongeBob }/>
            <div className="data">
                <Intro spongeBob= { SpongeBob }/>
                <SkillList spongeBob= { SpongeBob }/>
            </div>
        </div>
    );
}