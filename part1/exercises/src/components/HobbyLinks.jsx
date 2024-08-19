export default function HobbyLinks() {
   let hobbyLinks = ["https://slippi.gg", "https://www.halospawns.com"];

    return (
        <div>
            <a href = {hobbyLinks[0]}>Slippi.gg</a>
            <br></br>
            <a href = {hobbyLinks[1]}>HaloSpawns.com</a>
        </div>
    );
}