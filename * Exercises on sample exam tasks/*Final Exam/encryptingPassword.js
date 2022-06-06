function encryptingPassword(input) {
    let num = Number(input.shift());

    let pattern = /^(.+)>{1}(\d+)\|([a-z]+)\|([A-Z]+)\|(.+[^<>])<{1}\1$/;

    while (num > 0) {
        let line = input.shift();
        let match = pattern.exec(line);
        if (match != null) {
            let first = match[2];
            let second = match[3];
            let third = match[4];
            let fourth = match[5];

            let password = first + second + third + fourth;
            console.log(`Password: ${password}`);

        } else {
            console.log("Try another password!");
        }
        num--;
    }
}

encryptingPassword(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$",
    "$$<111|noo|NOPE|<<>$$"]);
encryptingPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"]);
