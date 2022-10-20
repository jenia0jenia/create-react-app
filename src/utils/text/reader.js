class Reader {
    constructor(selector) {
        this.selector = selector;
        this.activeClass = "is-visible";
        this.activeScroll = false;
        this.activeReading = false;
        this.factorPlus = 0;
        this.factorMinus = 0;
        this.maxFactor = 10;
        this.wpmFactor = 100;
        this.wordsDomArray = Array.from(
            document.querySelectorAll(`${this.selector} span`)
        );
    }

    setSettings(settings) {
        if (settings.text) {
            for (const set in settings) {
                if (set === 'text') {
                    this.start()
                }

                this[set] = settings[set]
            }
        }
        
        this.wpm = settings.wpm ? settings.wpm : 500;
    }

    start() {
        this.reset()

        if (this.wordsDomArray.length <= 0) {
            this.wordsDomArray = Array.from(
                document.querySelectorAll(`${this.selector} span`)
            );
        }
        this.activeReading = true
        this.reading()
    }
    
    reading() {

        let delay = (1 / (this.wpm / 60)) * 1000;

        setTimeout(() => {
            if (this.activeReading) {
                this.showWordsOneByOne();
    
                if (this.wordIndex < this.wordsDomArray.length) {
                    this.reading();
                } else {
                    this.activeReading = false;
                }
            }
        }, delay);
    }

    showWordsOneByOne() {
        if (this.wordIndex < 0) {
            this.wordIndex = 0;
        }

        if (this.wordIndex < this.wordsDomArray.length) {
            this.wordsDomArray[this.wordIndex++].classList.add(
                this.activeClass
            );
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
            if (this.wordIndex >= this.wordsDomArray.length) {
                break;
            }

            this.wordsDomArray[this.wordIndex++].classList.add(
                this.activeClass
            );
        }

        if (this.wordIndex < this.wordsDomArray.length) {
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

            if (this.wordIndex >= this.wordsDomArray.length) {
                this.wordIndex--;
                continue;
            }

            this.wordsDomArray[this.wordIndex--].classList.remove(
                this.activeClass
            );
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

        if (this.wordsDomArray.length) {
            this.wordsDomArray.forEach((span) => {
                span.classList.remove(
                    this.activeClass
                );
            })
        }

        this.wordsDomArray = Array.from(
            document.querySelectorAll(`${this.selector} span`)
        );
    }

    toggle = (e) => {
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
