package com.example.ToDoApp.Loaders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.ToDoApp.Repositories.TaskRepository;
import com.example.ToDoApp.Entities.Task;

@Component
public class DatabaseLoader implements CommandLineRunner{
      private final TaskRepository repository;

      @Autowired
      public DatabaseLoader(TaskRepository repository) {
            this.repository = repository;
      }

      @Override
      public void run(String... strings) throws Exception {
            this.repository.save(new Task("Task 1", "High", false));
            this.repository.save(new Task("Task 2", "Medium", false));
            this.repository.save(new Task("Task 3", "Low", false));
      }
}
