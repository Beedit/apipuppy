import net from "net";

const pipePath = "\\\\.\\pipe\\LiveSplit";
const pipe = net.createConnection(pipePath);

pipe.on("connect", () => {
    console.log("Connected to LiveSplit");
    pipe.write("getsplitindex\r\n");
});

pipe.on("data",(data) => {
    console.log("LiveSplit:",data.toString());
});