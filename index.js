class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  getTasks() {
    return this.tasks;
  }

  setTaskStatus(taskId, status) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.status = status;
    }
  }

  setTaskDeadline(taskId, deadline) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.deadline = deadline;
    }
  }

  trackTaskProgress(taskId, progress) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.progress = progress;
    }
  }
}

class EventPlanner {
  constructor() {
    this.events = [];
  }

  addEvent(event) {
    this.events.push(event);
  }

  removeEvent(eventId) {
    this.events = this.events.filter(event => event.id !== eventId);
  }

  getEvents() {
    return this.events;
  }

  setEventVenue(eventId, venue) {
    const event = this.events.find(event => event.id === eventId);
    if (event) {
      event.venue = venue;
    }
  }

  setEventBudget(eventId, budget) {
    const event = this.events.find(event => event.id === eventId);
    if (event) {
      event.budget = budget;
    }
  }

  sendInvitations(eventId, invitations) {
    const event = this.events.find(event => event.id === eventId);
    if (event) {
      event.invitations = invitations;
    }
  }

  trackRSVP(eventId, rsvpStatus) {
    const event = this.events.find(event => event.id === eventId);
    if (event) {
      event.rsvpStatus = rsvpStatus;
    }
  }
}

class PasswordManager {
  constructor() {
    this.passwords = {};
  }

  addPassword(account, password) {
    this.passwords[account] = password;
  }

  removePassword(account) {
    delete this.passwords[account];
  }

  getPassword(account) {
    return this.passwords[account];
  }

  getAllPasswords() {
    return this.passwords;
  }

  updatePassword(account, newPassword) {
    if (this.passwords.hasOwnProperty(account)) {
      this.passwords[account] = newPassword;
    }
  }
}

// 示例用法

const taskManager = new TaskManager();
taskManager.addTask({ id: 1, name: 'Task 1', status: 'In Progress' });
taskManager.addTask({ id: 2, name: 'Task 2', status: 'Pending' });
console.log(taskManager.getTasks());

const eventPlanner = new EventPlanner();
eventPlanner.addEvent({ id: 1, name: 'Event 1', venue: 'Venue 1' });
eventPlanner.addEvent({ id: 2, name: 'Event 2', venue: 'Venue 2' });
console.log(eventPlanner.getEvents());

const passwordManager = new PasswordManager();
passwordManager.addPassword('example@gmail.com', 'password123');
passwordManager.addPassword('example2@gmail.com', 'password456');
console.log(passwordManager.getAllPasswords());
