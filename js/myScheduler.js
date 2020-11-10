/**
 * Promise并行限制
 * 
 */
class Scheduler {
    constructor() {
      this.queue = [];
      this.maxCount = 2;
      this.runCounts = 0;
    }
    add(promiseCreator) {
      this.queue.push(promiseCreator);
    }
    taskStart() {
      for (let i = 0; i < this.maxCount; i++) {
        this.request();
      }
    }
    request() {
      if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {
        return;
      }
      this.runCounts++;
  
      this.queue.shift()().then(() => {
        this.runCounts--;
        this.request();
      });
    }
  }
  
  const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time);
  })
  
  const scheduler = new Scheduler();
  
  const addTask = (time,order) => {
    scheduler.add(() => timeout(time).then(()=>console.log(order)))
  }
  
  
  addTask(2000, '1');
  addTask(2000, '2');
  addTask(2000, '3');
  addTask(2000, '4');
  scheduler.taskStart()