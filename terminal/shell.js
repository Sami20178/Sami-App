class Shell {
    constructor() {
        this.cwd = "/";
        this.username = "sami";
    }

    execute(command) {
        command = command.trim();

        switch (command) {
            case "help":
                return `Verfügbare Befehle:
help
clear
pwd
ls
whoami
date`;

            case "pwd":
                return this.cwd;

            case "ls":
                return "home  apps  documents  downloads";

            case "whoami":
                return this.username;

            case "date":
                return new Date().toString();

            case "":
                return "";

            default:
                return `Befehl nicht gefunden: ${command}`;
        }
    }
}

window.shell = new Shell();
