package com.example.ToDoApp.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.ToDoApp.Entities.Task;

public interface TaskRepository extends CrudRepository<Task, Long>{
}
