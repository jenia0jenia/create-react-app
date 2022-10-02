class SlowReading {
    constructor(selector) {
        this.selector = selector
        this.wordIndex = 0
        this.activeClass = "is-visible"
        this.activeScroll = false
        this.activeReading = true
        this.factorPlus = 0
        this.factorMinus = 0
        this.wordsDomArray = []
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
        const toPos = this.wordIndex + 1

        this.factorMinus = 0
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
        const toPos = this.wordIndex - 1
        this.factorPlus = 0

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


    start() {
        this.wordsDomArray = Array.from(
            document.querySelectorAll(`${this.selector} span`)
        )

        // console.log(this.wordsDomArray);

        const randomTime = 1 + Math.random() * 500
        
        setTimeout(() => {
            // console.log(randomTime)
            if (this.activeReading) {
                this.showWordsOneByOne()
            }

            if (
                this.activeReading &&
                this.wordIndex < this.wordsDomArray.length
            ) {
                this.start()
            }
        }, randomTime)
    }

    toggle(e){
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