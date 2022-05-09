describe('first test', async () => {
        //get firstTask () { return $('.todo-list > li:nth-child(1) > div:nth-child(1) > label:nth-child(2)') }
        const firstTask = '.todo-list > li:nth-child(1) > div:nth-child(1) > label:nth-child(2)'
        const secondTask = '.todo-list > li:nth-child(2) > div:nth-child(1) > label:nth-child(2)'
        const thirdTask = 'To get launch'
        const fourthTask = 'To write homework'
        const taskBlank = 'html body section.todoapp-wrapper div.todoapp header.header input.new-todo'
        const secondTaskCheckbox = '.todo-list > li:nth-child(2) > div:nth-child(1) > input:nth-child(1)'
        const thirdTaskCheckbox = '.todo-list > li:nth-child(3) > div:nth-child(1) > input:nth-child(1)'
        const btnCompleted = '.filters > li:nth-child(3)'
        const btnActive = '.filters > li:nth-child(2)'
        const btnAll = '.filters > li:nth-child(1)'
        const btnClearCompleted = '.clear-completed'
        
        async function clickBtn(value) {
              await $(value).click()
              await browser.pause(1000)
        }
        
    
    it('should navigate to example cypress page', async () => {
        await browser.url('https://example.cypress.io/todo')
        await browser.pause(1000)
        await $(firstTask).isDisplayed()
        await $(secondTask).isDisplayed()
    });

    it('should be check text', async () => {
        await expect($(firstTask)).toHaveText('Pay electric bill')
        await expect($(secondTask)).toHaveText('Walk the dog')
    });

    it('should displayed two added tasks', async () => {
        await $(taskBlank).setValue(thirdTask)
        await browser.keys('Enter')
        await browser.pause(1000)
        await $(taskBlank).setValue(fourthTask)
        await browser.keys('Enter')
        await browser.pause(1000)
        await $(secondTaskCheckbox).click()
        await $(thirdTaskCheckbox).click()
        await browser.pause(1000)
    });

    
    it('should displayed only completed tasks', async () => {
        await clickBtn(btnCompleted)
    });    

    
    it('should displayed only active tasks',async () => {
        await clickBtn(btnActive)
    });

    
    it('should displayed all tasks',async () => {
        await clickBtn(btnAll)
    });

    
    it('should be clear completed',async () => {
        await clickBtn(btnClearCompleted)
    });

    
});


