class SlowReading {
    constructor(selector) {
        this.selector = selector
        this.wordIndex = 0
        this.activeClass = "is-visible"
        this.activeScroll = false
        this.activeReading = false
        this.factorPlus = 0
        this.factorMinus = 0
        this.wordsDomArray = Array.from(
            document.querySelectorAll(`${this.selector} span`)
        )
    }

    start() {
        this.activeReading = true

        if (this.wordsDomArray.length <= 0) {
            this.wordsDomArray = Array.from(
                document.querySelectorAll(`${this.selector} span`)
            )
        }

        const randomTime = 1.2 + Math.random() * 500

        setTimeout(() => {
            // console.log(randomTime)

            if (this.activeReading) {
                this.showWordsOneByOne()

                if (this.wordIndex < this.wordsDomArray.length) {
                    this.start()
                } else {
                    this.activeReading = false
                }
            }
                
        }, randomTime)
    }

    showWordsOneByOne() {
        if (this.wordIndex < 0) {
            this.wordIndex = 0
        }

        if (this.wordIndex < this.wordsDomArray.length) {
            this.wordsDomArray[this.wordIndex++].classList.add(this.activeClass)
        }
    }

    // showWords from currentWordIndex to pos
    showWordsWithFactor() {
        this.factorMinus = 0
        const toPos = this.wordIndex + 1

        if (this.wordIndex < 0) {
            this.wordIndex = 0
        }

        while (this.wordIndex < toPos + this.factorPlus) {
            if (this.wordIndex >= this.wordsDomArray.length) {
                break
            }

            this.wordsDomArray[this.wordIndex++].classList.add(this.activeClass)
        }

        if (this.wordIndex < this.wordsDomArray.length) {
            this.factorPlus++
        }
    }

    hideWordsWithFactor() {
        this.factorPlus = 0
        const toPos = this.wordIndex - 1

        if (this.wordIndex < 0) {
            this.wordIndex = 0
        }

        while (this.wordIndex > toPos - this.factorMinus) {
            if (this.wordIndex < 0) {
                break
            }

            if (this.wordIndex >= this.wordsDomArray.length) {
                this.wordIndex--
                continue
            }

            this.wordsDomArray[this.wordIndex--].classList.remove(
                this.activeClass
            )
        }

        this.factorMinus++
    }

    allowScroll = () => {
        this.activeScroll = true
    }

    denyScroll = () => {
        this.activeScroll = false
    }

    factorWheel = (e) => {
        if (this.activeScroll) {
            if (e.deltaY > 0) {
                this.showWordsWithFactor()
            } else {
                this.hideWordsWithFactor()
            }
        }

        e.preventDefault()
        return false
    }

    toggle = (e) => {
        // console.log(this)
        if (
            e.target.classList.contains("play") ||
            e.key === " " ||
            e.code === "Space" ||
            e.keyCode === 32
        ) {
            this.activeReading = !this.activeReading

            if (this.activeReading) {
                this.start()
            }
        }

        e.target.blur()
    }
}

export default SlowReading
