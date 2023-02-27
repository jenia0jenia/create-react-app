interface IUserSettings {
    text?: string;
    wpm?: number;
}

/**
 * 
 */
class Reader {
    activeClass: string = "is-visible";
    activeScroll: boolean = false;
    activeReading: boolean = false;
    factorPlus: number = 0;
    factorMinus: number = 0;
    maxFactor: number = 10;
    wpmFactor: number = 100;
    wordIndex: number = 0;
    wpm: number = 200;
    words: Element[];
    text: string = "";
    delay: number = 1000;

    constructor(readonly selector: string) {
        this.words = Array.from(
            document.querySelectorAll(`${this.selector} span`)
        );

        this.delay = 100 * this.wpm / 60;
    }

    setSettings(settings: IUserSettings): void {
        if (settings.text) {
            this.text = settings.text;
        }

        if (settings.wpm) {
            this.wpm = settings.wpm;
        }
    }

    start(): void {
        if (this.words.length === 0) {
            this.words = Array.from(
                document.querySelectorAll(`${this.selector} span`)
            );
        }
        this.activeReading = true;
        this.reading();
    }
    
    /**
     * ()
     */
    reading(): void {
        
        this.delay = 100 * this.wpm / 60;
        console.log(this.delay);

        setTimeout(() => {
            if (this.activeReading) {
                this.showWordsOneByOne();

                if (this.wordIndex < this.words.length) {
                    this.reading();
                } else {
                    this.activeReading = false;
                }
            }
        }, this.delay);
    }

    showWordsOneByOne() {
        if (this.wordIndex < 0) {
            this.wordIndex = 0;
        }

        if (this.wordIndex < this.words.length) {
            this.words[this.wordIndex++].classList.add(this.activeClass);
        }
    }

    // showWords from currentWordIndex to pos
    showWordsWithFactor() {
        this.factorMinus = 0;
        const toPos = this.wordIndex + 1;

        if (this.wordIndex < 0) {
            this.wordIndex = 0;
        }

        while (this.wordIndex < toPos + this.factorPlus) {
            if (this.wordIndex >= this.words.length) {
                break;
            }

            this.words[this.wordIndex++].classList.add(this.activeClass);
        }

        if (this.wordIndex < this.words.length) {
            this.factorPlus = Math.min(this.maxFactor, ++this.factorPlus);
        }
    }

    hideWordsWithFactor() {
        this.factorPlus = 0;
        const toPos = this.wordIndex - 1;

        if (this.wordIndex < 0) {
            this.wordIndex = 0;
        }

        while (this.wordIndex > toPos - this.factorMinus) {
            if (this.wordIndex < 0) {
                break;
            }

            if (this.wordIndex >= this.words.length) {
                this.wordIndex--;
                continue;
            }

            this.words[this.wordIndex--].classList.remove(this.activeClass);
        }

        this.factorMinus = Math.min(this.maxFactor, ++this.factorMinus);
    }

    allowScroll = () => {
        this.activeScroll = true;
    };

    denyScroll = () => {
        this.activeScroll = false;
    };

    factorWheel = (e) => {
        if (this.activeScroll) {
            if (e.deltaY > 0) {
                this.showWordsWithFactor();
            } else {
                this.hideWordsWithFactor();
            }
        }

        e.preventDefault();
        return false;
    };

    reset() {
        this.wordIndex = 0;
        this.activeReading = false;

        if (this.words.length) {
            this.words.forEach((span) => {
                span.classList.remove(this.activeClass);
            });
        }

        this.words = Array.from(
            document.querySelectorAll(`${this.selector} span`)
        );
    }

    toggle = (e): void => {
        console.log(e);

        if (
            e.target.classList.contains("play") ||
            e.key === " " ||
            e.code === "Space" ||
            e.keyCode === 32
        ) {
            this.activeReading = !this.activeReading;

            if (this.activeReading) {
                this.reading();
            }
        }

        e.target.blur();
    };
}

export default Reader;
