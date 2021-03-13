    let sliderHomieFactory = {
        createNewSlider: function () {  
            let sliderHomie= {
                prevButton: null,
                nextButton: null,
                slideItemActive: null,
                images: [
                    'img/img1.jpg',
                    'img/img2.jpg',
                    'img/img3.jpg',
                    'img/img4.jpg',
                    'img/img5.jpg'
                ],
                iSlider: 0,
                main: function(elId){
                    
                    let sliderSelector= document.getElementById(elId);
                    this.prevButton= sliderSelector.querySelector('.prevButton');
                    this.nextButton= sliderSelector.querySelector('.nextButton');
                    this.slideItemActive= sliderSelector.querySelector('.slideItemActive');
                    let that = this;
                    this.prevButton.disabled = true;
                    this.slideItemActive.src = this.images[this.iSlider];
                    this.prevButton.addEventListener('click', function(event){
                        that.onPrevButtonClick(event);
                    });
                    this.nextButton.addEventListener('click', function(event){
                        that.onNextButtonClick(event);
                    });
                },
            
                onPrevButtonClick: function(event){
                    if (this.iSlider > 1){
                        this.iSlider--;
                        this.slideItemActive.src = this.images[this.iSlider];
                        this.nextButton.disabled = false;
                    }else if (this.iSlider===1){
                        this.iSlider--;
                        this.slideItemActive.src = this.images[this.iSlider];
                        this.prevButton.disabled = true;
                    }else{
                        console.log('error');
                    }
                },
            
                onNextButtonClick: function(event){
                    if (this.iSlider<this.images.length-2){
                        this.iSlider++;
                        this.slideItemActive.src = this.images[this.iSlider];
                        this.prevButton.disabled = false;
                    }else if(this.iSlider === this.images.length-2){
                        this.iSlider++;
                        this.slideItemActive.src = this.images[this.iSlider];
                        this.nextButton.disabled = true;
                    }else{
                        console.log('error');
                
                    }
                },
            
            }
            return sliderHomie;
        }
        
    }
    