import User from "./user"
const users = [
    {
        name: "Linda",
        pic:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/bb/bbb2abade3e13365ca19ed6ebe5ec19040ae899f.jpg"
    },
    {
        name: "Donal",
        pic:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d4/d4e129bb7771297fbdc581c46236c627979a407d.jpg"
    },
    {
        name: "Mary",
        pic:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f9/f925f43e920764fd0c0d3bb329289f37d01981ac.jpg"
    },
    {
        name: "Tom",
        pic:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00d55e32323805712f9f9e3bc007b040de09fcd4.jpg"
    },
]

export default function UserList() {
    return (
        <div className="App">
            {users.map((usr) => (
                <User name={usr.name} pic={usr.pic} />
            ))}
        </div>
    );
}