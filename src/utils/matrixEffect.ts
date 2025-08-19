function matrixEffect() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'

  const matrixElements = Array.from(
    document.querySelectorAll('#matrix'),
  ) as HTMLLIElement[]

  const intervals: Record<string, ReturnType<typeof setInterval>> = {}

  matrixElements.forEach((element: HTMLLIElement) => {
    element.onmouseover = (event: MouseEvent) => {
      const target = event.target as HTMLLIElement
      // Use data-item instead of data-value to match the Navigation component
      const targetValue = target.dataset.item || target.innerText || ''

      if (!targetValue || intervals[targetValue]) return // If no text or animation already running, do nothing

      const startIndex = Math.max(targetValue.length - 4, 0) // Start index for animation
      const textBeforeAnimation = targetValue.substring(0, startIndex)

      let iteration = startIndex

      intervals[targetValue] = setInterval(() => {
        target.innerText =
          textBeforeAnimation +
          targetValue
            .substring(startIndex)
            .split('')
            .map((letter: string, index: number) => {
              if (index < iteration - startIndex) {
                return targetValue[index + startIndex]
              }

              return letters[Math.floor(Math.random() * 26)]
            })
            .join('')

        if (iteration >= targetValue.length) {
          clearInterval(intervals[targetValue])
          delete intervals[targetValue] // Clean up interval after animation completes
        }

        iteration += 1 / 3
      }, 30)
    }
  })
}

export { matrixEffect }

