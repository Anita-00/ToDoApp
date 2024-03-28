package com.example.ToDoApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ToDoApp.Entities.Task;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

private List<Task> taskList = new ArrayList<Task>();

    public TaskController() {
        taskList.add(new Task("Task 3", "High", true));
        taskList.add(new Task("Task 4", "Medium", false));
        taskList.add(new Task("Task 5", "Low", true));
    }

    @GetMapping
    public List<Task> findAll() {
        return taskList;

    }
}